import { ImSpinner2 } from "react-icons/im";

export default function PostLoading() {
  return (
    <div className="flex items-center justify-center w-full">
      <ImSpinner2 className="text-5xl animate-spin" />
    </div>
  );
}
