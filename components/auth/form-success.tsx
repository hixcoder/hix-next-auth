import { CheckCircledIcon } from "@radix-ui/react-icons";

export function FormSuccess(props: { message?: string }) {
  if (!props.message) {
    return null;
  }
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{props.message}</p>
    </div>
  );
}
