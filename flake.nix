{
  description = "Balssh's blog";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
    ...
  }: let
    forAllSystems = nixpkgs.lib.genAttrs ["x86_64-linux"];

    pkgsForSystem = system: (import nixpkgs {inherit system;});
  in {
    packages = forAllSystems (
      system: let
        inherit
          (pkgsForSystem system)
          buildEnv
          cacert
          dockerTools
          zola
          lib
          ;
        version = self.shortRev or (builtins.substring 0 7 self.dirtyRev);
        rev = self.rev or self.dirtyRev;
      in {
        default = self.packages.${system}.balssh;

        balssh-container = dockerTools.buildImage {
          name = "balssh/jnsgr.uk";
          tag = version;
          created = "now";
          copyToRoot = buildEnv {
            name = "image-root";
            paths = [
              self.packages.${system}.balssh
              cacert
            ];
            pathsToLink = [
              "/bin"
              "/etc/ssl/certs"
            ];
          };
          config = {
            Entrypoint = ["${lib.getExe self.packages.${system}.balssh}"];
            Expose = [
              8080
              8801
            ];
            User = "10000:10000";
          };
        };
      }
    );

    devShells = forAllSystems (
      system: let
        pkgs = pkgsForSystem system;
      in {
        default = pkgs.mkShell {
          name = "balssh";
          NIX_CONFIG = "experimental-features = nix-command flakes";
          nativeBuildInputs = with pkgs; [
            zola
            zsh
          ];
          shellHook = "exec zsh";
        };
      }
    );
  };
}
