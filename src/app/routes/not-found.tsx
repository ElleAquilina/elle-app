import LocationSearch from '@/assets/images/location-search.svg'

function NotFound() {
    return (
        <>
            <div className='flex h-screen flex-row items-center justify-center'>
                <img
                    src={LocationSearch}
                    alt='Page not found'
                    className='h-2/5 w-2/5'
                />
                '
                <div className='-mt-50 text-right'>
                    <h1 className='-py-10 -ml-35 text-[16rem]/40'>404</h1>
                    <h2>Uh Oh!</h2>
                    <h4>This page is missing.</h4>
                    <h4 className='underline'>
                        <a href='/'>Go back home</a>
                    </h4>
                </div>
            </div>
        </>
    )
}

export default NotFound
