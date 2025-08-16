import flyoIcon from "../assets/images/logo.svg";
import docIcon from "../assets/images/icon-document.svg";
import folIdcon from "../assets/images/icon-folder.svg";
import uploadIcon from "../assets/images/icon-upload.svg";

export function HeaderSection() {
  return (
    <header className="w-sm rounded-[0.8rem] rounded-tr-[7rem] bg-Blue-850 p-6">
      <img src={flyoIcon} alt="" />

      <div className="my-8 flex flex-row gap-x-4">
        <img
          src={docIcon}
          className="size-16 rounded-xl bg-Blue-950 p-4"
          alt=""
        />
        <img
          src={folIdcon}
          className="size-16 rounded-xl bg-Blue-950 p-4"
          alt=""
        />
        <img
          src={uploadIcon}
          className="size-16 rounded-xl bg-Blue-950 p-4"
          alt=""
        />
      </div>
    </header>
  );
}
