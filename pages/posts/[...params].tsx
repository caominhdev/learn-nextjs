import { useRouter } from 'next/router'

export interface ParamsPageProps {}

export default function ParamsPage(props: ParamsPageProps) {
    const router = useRouter()

    return (
        <div>
            <div>
                <h1>Params Page</h1>

                <p>{JSON.stringify(router.query)}</p>
            </div>
        </div>
    )
}
