import { useOthers, useSelf } from "@/liveblocks.config";

export function Avatars() {
  const users = useOthers();
  const currentUser = useSelf();

  return (
    <div className='flex px-3'>
      {users.map(({ connectionId, info }) => {
        return (
          <Avatar key={connectionId} />
        );
      })}

      {currentUser && (
        <div className="relative ml-8 first:ml-0">
          <Avatar
          />
        </div>
      )}
    </div>
  );
}

export function Avatar() {
  return (
    <span className="w-6 h-6 text-xs border-background border-2 ml-[-2px] cursor-pointer bg-primary text-primary-foreground flex justify-center items-center font-extrabold rounded-full">
      Lb
    </span>
  );
}
// export function Avatar({ picture, name }: { picture: string; name: string }) {
//   return (
//     <div className={styles.avatar} data-tooltip={name}>
//       <img
//         alt={name}
//         src={picture}
//         className={styles.avatar_picture}
//         data-tooltip={name}
//       />
//     </div>
//   );
// }
