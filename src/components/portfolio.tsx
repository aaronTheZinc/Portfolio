import React from "react";
import { yellow } from "../theme";
import "./index.css";
interface ProfileDescriptionProps {
  description: string;
}
export const ProfileDescription = ({
  description,
}: ProfileDescriptionProps): JSX.Element => {
  return (
    <div className="text-white m-10">
      <div>
        <label style={{ color: yellow }} className="text-3xl">
          Who Am I?
        </label>
      </div>
      <div className="mt-10">
        <label className="Courier">{description}</label>
      </div>
    </div>
  );
};
