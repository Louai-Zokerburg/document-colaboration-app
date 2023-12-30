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
    <div className={`flex`}>
      {users.map(({ connectionId, info }) => (
        <Avatar key={connectionId} name={info.name} />
      ))}

      {currentUser && (
          <Avatar
            name={currentUser.info.name}
          />
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
        <TooltipContent align="center" side="bottom">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
