import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Layout from '../../components/layout'
import styles from "../../styles/nextjs_skill.module.scss"
import mountainImg from '../../images/mountain.webp'
import NewImageComponent from '../../components/new-image-comp'
import Container from '../../components/container'

function NextSkills() {
    return (
        <Layout>
            <Head>
                <title>Next.js Skill | Image View </title>
            </Head>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.imageWrapper}>
                        <div >
                            <Image
                                alt=""
                                src={'https://cdn.pixabay.com/photo/2022/07/25/10/19/mountain-7343375_960_720.jpg'}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <span>Render : URL, layout:fill</span>
                    </div>
                    <div className={styles.imageWrapper}>
                        <div >
                            <Image
                                alt=""
                                src={mountainImg?.src}
                                layout="responsive"
                                width={960}
                                height={720}
                            />
                        </div>
                        <span>Render : Static path, layout:responsive</span>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div >
                            <Image
                                alt=""
                                src={"https://cdn.pixabay.com/photo/2022/06/28/15/21/bach-7289941_960_720.jpg"}
                                layout="intrinsic"
                                width={960}
                                height={720}
                            />
                        </div>
                        <span>Render : URL, layout:intrinsic</span>
                    </div>
                </div>
                <h1 className='text-2xl my-6'> New Image component</h1>
                <NewImageComponent />
            </Container>
        </Layout >
    )
}

export default NextSkills