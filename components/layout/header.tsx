import { useAuth, signOut } from "../../lib/authContext";
import Link from "next/link";

export default function Header(props: any) {
	const { user, loading } = useAuth();

	return (
		<div className="flex h-full flex-row">
			<div className="flex-1 my-auto">
				<Link href="/">
					<button>Home</button>
				</Link>
			</div>

			<div className=" m-auto space-x-2">
				{!user && !loading ? (
					<>
						<Link passHref href="/login">
							<button className="m-auto"> Log In </button>
						</Link>
					</>
				) : null}
				{user ? (
					<>
						<Link href="/privatessr">
							<button> Private SSR</button>
						</Link>

						<Link href="/private">
							<button> Private </button>
						</Link>

						<button onClick={signOut}> Sign Out </button>
					</>
				) : null}
			</div>
		</div>
	);
}
