import React, { useContext } from "react";
import RepositoryContext from "../../../../contexts/repositoryContext";
import { formatDate } from "./../../../../assets/helperFunctions";

import InfoBox from "./info-box/infoBox";

import "./infoBoxes.scss";

const InfoBoxes = ({ large, pos }) => {
  const repoContext = useContext(RepositoryContext);

  if (pos === "left")
    return (
      <div className="info-boxes">
        <InfoBox
          large={large}
          fieldName="Owner"
          data={repoContext.owner.login}
        />
        <InfoBox
          large={large}
          fieldName="Stars"
          data={repoContext.stargazers.totalCount}
        />
        <InfoBox
          large={large}
          fieldName="Created at"
          data={formatDate(repoContext.createdAt)}
        />
        <InfoBox
          large={large}
          fieldName="Public/Private"
          data={repoContext.isPrivate ? "Private" : "Public"}
        />
        <InfoBox
          large={large}
          fieldName="Watchers"
          data={repoContext.watchers.totalCount}
        />
        <InfoBox
          large={large}
          fieldName="Lincense Info"
          data={
            repoContext.licenseInfo
              ? repoContext.licenseInfo.name
              : "No License"
          }
        />
      </div>
    );
  else
    return (
      <div className="info-boxes">
        <InfoBox
          large={large}
          fieldName="Languages"
          data={
            repoContext.languages.edges.length > 0
              ? repoContext.languages.edges
              : "No code"
          }
        />
        <InfoBox
          large={large}
          fieldName="Description"
          data={
            repoContext.description ? repoContext.description : "No Description"
          }
        />
      </div>
    );
};

export default InfoBoxes;
