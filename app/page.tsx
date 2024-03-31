import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div className="max-w-[75%] m-auto text-center text-3xl [&>*]:mb-4">
      <p>
        For people that plays{" "}
        <Link
          target="_blank"
          className="text-red-500 hover:underline"
          href="https://www.pokecommunity.com/showthread.php?t=437688">
          Radical Red 4.1
        </Link>{" "}
        with randomized abilities.
      </p>{" "}
      <p>
        Help you keep track what&apos;s your Mons abilities and some other useful pieces of
        information.
      </p>{" "}
      <p>
        Go here&nbsp;
        <Link className="text-blue-500 hover:underline" href="/abilities">
          Abilities
        </Link>
        .
      </p>
    </div>
  );
}
