import { useOthers, useSelf } from "@/liveblocks.config";
import { Avatar } from "./avatars";



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
                    name={currentUser.info.name} />)}
        </div>
    );
}
