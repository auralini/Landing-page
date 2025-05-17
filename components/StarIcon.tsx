export default function StarIcon({
  size = 48,
  color = "#fff",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke={color}
    >
      <path
        d="M27.4121 21.405L32.1542 15.3649L26.1217 20.1129L23.9999 2.37465L21.8781 20.1129L15.8456 15.3649L20.5877 21.405L2.87158 23.5294L20.5877 25.6538L15.8456 31.6939L21.8781 26.9459L23.9999 44.6842L26.1217 26.9459L32.1542 31.6939L27.4121 25.6538L45.1282 23.5294L27.4121 21.405Z"
        fill="white"
      />
    </svg>
  );
}
