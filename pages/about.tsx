import { useRouter } from 'next/router'

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
    const router = useRouter()

    console.log('About query:', router.query)

    return <div>About Page</div>
}
