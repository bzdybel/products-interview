import React from "react";
import ReactTooltip from "react-tooltip";

interface ProfileProps {
  isLogged: boolean;
}

export function Profile({ isLogged }: ProfileProps) {
  return (
    <>
      {isLogged ? (
        <>
          <img
            data-tip
            data-for="profile-picture"
            src="https://s3-alpha-sig.figma.com/img/eab6/2cc4/a6db8b3c0114fa28b7b9c7776df30d43?Expires=1603065600&Signature=EpoHV-0KTX6JJ9AVgwz0FYrRR-pMj6FdC6jA-MkXSC6RA-frOqWrCkb3dCVSqO242nhvHBgqKSoL69fp1uyktKsPynVdcsGZQOuebITcieJ0JmdynbxHzEzKDWEFT3~rE6yJ-1NdgR6jBJQEWCuR2UVpTJ7tkepsXIRF4PGdCa6PPrVGh90CyW69hX6-HsmSEbduoEPiN4-H8WMuEd1wkKoxuIfoLHlvvk80RPTz21hFcVksEadyHWpp~LqBIVMeq38LBOU~omogwq019~2YbqY65I7lMhU9iT2hedDs8bBe60LWKHPtSvu0WFVZwVY1vV3mshwxaVLaIVDLSM5RLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="Profile"
            className="min-width  rounded-circle w-10 profile-picture"
          />
          <ReactTooltip
            type="light"
            effect="solid"
            clickable={true}
            border={true}
            place="bottom"
            id="profile-picture"
            aria-haspopup="true"
            data-offset="{'top': 20, 'left': 220}"
          >
            <p className="logut-tooltip d-flex justify-content-start align-items-center">
              Logout
            </p>
          </ReactTooltip>
        </>
      ) : (
        <button type="submit" className="btn btn-outline-primary btn-login">
          Log in
        </button>
      )}
    </>
  );
}
