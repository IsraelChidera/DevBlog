import Container from '../widget/Container';

const Hero = () => {

    const blogTitle = "What is your blog name";
    const blogDescription = `
    What should be your blog description for instance
    Learn about cryptocurrency, NFTs, and blockchain, discover our latest 
    product updates, partnership announcements, user stories, and more.
    `

    return (
        <header className='h-[40vh] md:h-[60vh] flex justify-center items-center bg-img'>
            <Container className='py-3 flex justify-center'>
                <div className='w-[521px] text-center'>
                    <h1 className='text-3xl lg:text-5xl font-bold text-primary'>{blogTitle}</h1>
                    <p className='mt-2 lg:text-lg opacity-60'>
                        {blogDescription}
                    </p>
                </div>
            </Container>
        </header>
    )
}

export default Hero