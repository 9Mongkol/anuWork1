import Link from "next/link"

export default function service() {
  return (
    <>
    <h1><center>Home Page</center></h1>
    <br></br>
    <center>
    <Link href="/">Home</Link> |
    <Link href="/about">About</Link> |
    <Link href="/Service">Service</Link> | 
    <Link href="/Contact">Contact</Link> |
    </center>
    </>
  );
}
