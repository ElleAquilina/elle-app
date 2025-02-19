import Header from '@/components/header'
import { Button } from '@/components/button'
import Typewriter from '@/components/typewriter'
import Waves from '@/components/waves'
import Blobs from '@/components/blobs'
import Timeline from '@/components/timeline'
import Programmer from '@/assets/images/programmer.svg'
import UpdatedResume from '@/assets/images/updated-resume.svg'
import NewMessage from '@/assets/images/new-message.svg'
import Server from '@/assets/images/server.jpg'
import { motion } from 'framer-motion'
import { ChevronDown, Linkedin, Send } from 'lucide-react'
import Java from '@/assets/icons/java'
import {
    SiJavascript,
    SiAngular,
    SiPostgresql,
    SiHibernate,
    SiJquery,
    SiJira,
    SiGit,
} from '@icons-pack/react-simple-icons'
import IconList from '@/components/icon-list.tsx'
import AWS from '@/assets/icons/aws.tsx'

function Home() {
    const apexIcons = [
        { icon: Java, name: 'Java' },
        { icon: SiHibernate, name: 'Hibernate' },
        { icon: SiJquery, name: 'jQuery' },
        { icon: SiJavascript, name: 'Javascript' },
        { icon: SiAngular, name: 'AngularJS' },
        { icon: SiPostgresql, name: 'PostgreSQL' },
        { icon: AWS, name: 'AWS' },
        { icon: SiJira, name: 'Jira Pipelines' },
        { icon: SiGit, name: 'Git' },
    ]

    const timelineData = [
        {
            year: '2019-2024',
            title: 'APEX Silver',
            content: (
                <div>
                    <h5>Software Engineer</h5>
                    <p>
                        A large fintech firm, focusing on tax-related software.
                        With such high volume optimization was a constant
                        priority, and I was proud to contribute a rewrite of our
                        dynamic search queries that is used (and extended)
                        extensively to this day.
                    </p>
                    <br />
                    <h5>Main Technologies:</h5>
                    <IconList data={apexIcons} size='35' />
                </div>
            ),
        },
        {
            year: '2017',
            title: 'Eperformance Inc.',
            content: (
                <div>
                    <h5>Junior Developer</h5>
                    <p>
                        A Canadian-based company with a product focusing on
                        government grants online applications and management
                        with a Microsoft-based full-stack solution. I worked
                        with legacy technologies and integrating into systems
                        like Microsoft Dyanmics CRM.
                    </p>
                    <br />
                    <h5>Technical Writer</h5>
                    <p>
                        My first job out of college, I was hired as a technical
                        writer to document. I was lucky to be given a lot of
                        freedom, and over the course of a few months I made
                        different written and visual materials including guides,
                        digrams, and FAQ/help desk materials, as well as styling
                        protocols for documents and communications.
                    </p>
                </div>
            ),
        },
    ]

    return (
        <div className='w-full place-self-center'>
            <Header />
            <div
                id='hero'
                className='bg-background relative flex h-[calc(100vh-56px)] w-full flex-col overflow-hidden xl:px-[15%]'
            >
                <Waves />
                <div className='z-10 flex flex-grow flex-col-reverse items-center justify-evenly self-center md:w-4/5 md:flex-row'>
                    <div className='flex flex-col justify-center md:w-3/4 lg:px-10'>
                        <Blobs />
                        <h4 className='md:-mx-6 md:mb-4 md:text-3xl lg:text-4xl'>
                            Hi there,
                        </h4>
                        <h3 className='text-center md:text-left md:text-5xl lg:text-6xl'>
                            I'm{' '}
                            <span className='text-primary'>Elle Aquilina</span>
                        </h3>
                        <h6 className='mt-6 md:text-xl lg:text-2xl'>
                            I'm a full-stack developer that enjoys
                            <br />
                            <Typewriter useColors={false} />
                        </h6>
                        <Button
                            className='text-on-primary mt-6 hidden w-30 sm:flex'
                            asChild
                        >
                            <a href='#contact'>
                                <Send /> Contact Me
                            </a>
                        </Button>
                    </div>
                    <div className='flex w-3/5'>
                        <img
                            src={Programmer}
                            alt={'Illustration of programmer at computer desk'}
                        />
                    </div>
                </div>
                <motion.div
                    animate={{ y: 10 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 0.5,
                    }}
                    className='z-10 self-center pb-6'
                >
                    <ChevronDown />
                </motion.div>
            </div>
            <div
                id='about'
                className='bg-surface/50 flex flex-col space-x-[10%] p-[10%] md:flex-row xl:px-[15%]'
            >
                <div className='m-0 flex min-w-1/4 flex-col justify-between p-0'>
                    <h4 className='text-primary whitespace-nowrap'>
                        &#62; ABOUT
                    </h4>
                    <img
                        src={UpdatedResume}
                        alt={'Illustration of woman holding papers'}
                        className='hidden max-w-50 md:block'
                    />
                </div>
                <div>
                    <h3>
                        Welcome! This website is a portrayal of me, my projects
                        & experiences, and my hobbies.
                    </h3>
                    <div className='text-justify'>
                        <p>
                            I began my tech journey while I was in highscool
                            with a &#60;table&#62; tag fueled nightmare of a
                            website. Later, I learned Java and coded my first
                            game- chess! It was made with Java swing and was one
                            giant class, and I'm happy to say it no longer
                            exists.
                        </p>
                        <br />
                        <p>
                            Since then I've come a long way; Besides writing
                            much more legible code, I've worked professionally
                            for a large fintech company, and a Canadian
                            government grants focused company. I also love
                            photography, baking and cooking, and working on
                            other tech-related projects in my spare time.
                        </p>
                        <br />
                        <p>
                            As for the future? Somewhere among the corn fields
                            of Illinois, I'm working on my next projects and
                            looking for my next adventure.
                        </p>
                    </div>
                    <br />
                    <p>- Elle Aquilina</p>
                </div>
            </div>
            <div
                id='experience'
                className='bg-background flex flex-col space-x-[10%] p-[10%] md:flex-row xl:px-[20%]'
            >
                <div>
                    <h4 className='text-primary pb-10 whitespace-nowrap'>
                        &#62; EXPERIENCE
                    </h4>
                </div>
                <Timeline data={timelineData} />
            </div>
            <div
                id='projects'
                className='bg-surface/50 flex flex-col space-x-[10%] p-[10%] md:flex-row xl:px-[15%]'
            >
                <div className='m-0 min-w-1/4 p-0'>
                    <h4 className='text-primary whitespace-nowrap'>
                        &#62; PROJECTS
                    </h4>
                    <p>
                        This website is made with Vite, React, and TailwindCSS.
                        It uses CI/CD through Github, Github Actions, and
                        Runners. I run a Ubuntu LXC that hosts my runner, and
                        deploys it to a Caddy server. My Caddy server also is
                        used as a reverse proxy, and through Cloudflare I'm able
                        to server this to the world!
                    </p>
                </div>
            </div>
            <div
                id='hobbies'
                className='bg-surface/50 flex flex-col space-x-[10%] p-[10%] md:flex-row xl:px-[20%]'
            >
                <div className='m-0 min-w-1/4 p-0'>
                    <h4 className='text-primary whitespace-nowrap'>
                        &#62; HOBBIES
                    </h4>
                </div>
                <div className='flex flex-col'>
                    <div>
                        <h3>Networking</h3>
                        <p>
                            It's no shock to anyone that most ISPs supplied
                            routers don't do a great job at getting a WiFi
                            signal from a dusty basement corner across a whole
                            house. After a few weeks with spotty upstairs WiFi,
                            I finally decided to do something about it-- but if
                            I was going to do something, I wanted to future
                            proof! Thus began my home network overhaul.
                        </p>
                        <br />
                        <p>
                            I tore up the walls and installed a plethora of CAT5
                            into the ceiling, to mount WiFi access points as
                            well as future-proof for cameras. I also installed a
                            new wall-mounted server rack, a new router (ISPs
                            router put into bridge mode), managed switch,
                            terminated all CAT5s into a sleek patch panel, and
                            terminated all the unused coax (who uses coax these
                            days?).
                        </p>
                        <br />
                        <p>
                            Finally, with all new hardware, I setup subnets and
                            VLANs for security (does my Roomba really need
                            internet access?), and documented it all on a Netbox
                            instance that I self-host. Overkill? Probably.
                        </p>
                        <img
                            src={Server}
                            alt='Close up image of my home server rack.'
                            className='w-80'
                        />
                    </div>
                    <div>
                        <h3>Self-Hosting</h3>
                        <p>
                            I spent years of having multiple copies of
                            everything- documents, photos, videos- on various
                            hard drives, Google drives, and iClouds. It was
                            always a mess to scan and store new documents,
                            especially if following the 3-2-1 rule. After
                            completing my network upgrade, I looked at how I
                            stored everything. Is there a better way? Of course
                            there is.
                        </p>
                        <br />
                        <p>
                            I purchased a few Dell Optiplex Micro boxes, and set
                            them up to run as a cluster using Proxmox
                            (virtualization like VMWare). It runs some terabytes
                            of storage, some 200gb of RAM, and a cute 12CPU
                            cores.
                        </p>
                        <br />
                        <p>
                            With that, I was able to set up a bunch of
                            ever-growing services, including hosting this
                            website!
                        </p>
                    </div>
                    <div>
                        <h5>Photography</h5>
                    </div>
                </div>
            </div>
            <div
                id='contact'
                className='flex flex-col justify-between space-x-[10%] p-[10%] sm:flex-row md:flex-row xl:px-[25%]'
            >
                <div>
                    <div className='m-0 mt-4 min-w-1/4 p-0'>
                        <h4 className='text-primary whitespace-nowrap'>
                            &#62; CONTACT ME
                        </h4>
                    </div>
                    <div>
                        <h3>Want to get in touch? </h3>
                        <br />
                        <p>
                            Contact me by email or connect with me on LinkedIn!
                        </p>
                        <Linkedin />
                    </div>
                </div>
                <div className='self-center'>
                    <img
                        src={NewMessage}
                        alt='Illustration of envelopes with woman beside them'
                        className='w-60'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
