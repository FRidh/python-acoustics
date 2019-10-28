# Nix expression to build the package.
# Calling `nix-build develop.nix` will build a
# Python 3.5 version of the package.

let
  pkgs = import <nixpkgs> {};
  python = pkgs.python3.override {
    packageOverrides = self: super: {
      acoustics = super.callPackage ./default.nix { };
    };
  };
in (python.withPackages(ps: with ps; [ ipython acoustics ])).env
