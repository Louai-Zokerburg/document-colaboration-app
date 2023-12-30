import { useOthers, useSelf } from "@/liveblocks.config";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export function Avatars() {
  const users = useOthers();
  const currentUser = useSelf();

  return (
    <div className={`flex px-3`}>
      {users.map(({ connectionId, info }) => (
        <Avatar key={connectionId} name={info.name} />
      ))}

      {currentUser && (
        // <div className={`relative ml-8 first:ml-0`}>
          <Avatar
            name={currentUser.info.name}
          />
        // </div>
      )}
    </div>
  );
}

export function Avatar({ name }: { name: string }) {
  const userInitials = name.toUpperCase().slice(0, 2)
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="w-8 h-8 box-border text-xs ml-[-4px] border-2 cursor-default bg-primary text-primary-foreground flex justify-center items-center font-semibold rounded-full">
            {userInitials}
          </span>
        </TooltipTrigger>
        <TooltipContent align="center">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
