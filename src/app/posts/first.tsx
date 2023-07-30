import Link from "next/link";

export default function FirstPost() {
   return (
      <div>
         <h1>Ini halaman Pertama</h1>
         <Link href='/'>back to home</Link>
      </div>
   );
}
