import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../layouts/works'
import Section from '../components/section'
import { WorkGridItem } from '../components/gridItem'
import Link from 'next/link'

import {githubUrl} from '../constants'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} pt={20}>
        Latest Works
      </Heading>
      <SimpleGrid columns={[1, 1]} gap={6}>
        <Section>
          <WorkGridItem
            id="full"
            title="F.U.L.L"
            url={`${githubUrl}/FULL`}
            thumbnail="/images/kyrios.png"
            width={100}
            height={100}
          >
            A novel data driven Bitcoin fee estimation algorithm.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="lnd-setup"
            title="Auto-Provisioning LND"
            url={`${githubUrl}/auto-provisioned-lnd`}
            width={100}
            height={100}
          >
            Lnd node auto-provisioning docker set up for cloud enviorment. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="onion78"
            title="Onion78"
            url={`${githubUrl}/Onion78`}
            thumbnail="/images/onion78.jpeg"
            width={100}
            height={100}
          >
            MIT Hackathon winner 2021. Onion78 implements the payjoin standard
            (BIP-78) and privacy features (Tor Hidden Services) into an iOS
            application
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="chaincase"
            title="Chain Case"
            url="https://github.com/chaincase-app/Chaincase"
            thumbnail="/images/chaincase.png"
            width={100}
            height={100}
          >
            Chaincase frees your coins from their linear public history without
            ever taking control. Proven by more than ₿50,000 in successful
            CoinJoin mixes.
          </WorkGridItem>
        </Section>
       
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Previous Works
        </Heading>
        <SimpleGrid columns={[1, 1]} gap={6}>
          <Section>
            <WorkGridItem
              id="quest"
              title="Quest2Arm"
              src={`${githubUrl}/quest/tree/arm`}
              thumbnail="/images/quest.png"
              width={229}
              height={42}
            >
              A port of the real time x86 OS{' '}
              <Link href="http://www.questos.org/"> quest </Link> to ARMv7.
              Submited as a final project for CS522 Operating Systems
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section>
          <WorkGridItem
            id="Aqua Watch"
            title="Aqua Watch"
            url="https://github.com/aqua-watch/Firmware"
          >
            Leaching of lead and other contaminants into tap water poses a
            significant health risk and is expensive to accurately and
            efficiently detect in real time. We have utilized commer- cially
            available low-cost water metric sensors to represent water samples
            in an n-dimensional space and leveraged classification models to
            detect lead contamination in tap water. Experimental results suggest
            that our novel methodology is an effective and cost efficient way to
            detect lead contamination. Furthermore, our data driven approach
            shows promise of being applied to other heavy metal contaminants and
            organic pollutants while still using the same hardware.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="btcEtl"
            title="BTC ETL"
            url={`${githubUrl}/armins88/BTC_ETL`}
          >
            Collect and store mempool / network state for txs coming into the
            mempool and recently confirmed txs. Stored locally using Rocks DB.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="dislection"
            title="Dislection"
            url={`${githubUrl}/armins88/Dislection`}
          >
            A small firefox extension to convert all fonts in the DOM to one
            tailored for Dyslexic readers. Dislection is part of a larger effort
            to bring accessibility to the web. I plan to extend the extension to
            dynamically change text-based content on the web to fit a specific
            readers needs. There is more research that needs to be done into how
            we exactly quantify good reading and what properties of text and/or
            web-page we change in order to improve reading.
          </WorkGridItem>
        </Section>
        <SimpleGrid columns={[1, 1]} gap={6}>
          <Section>
            <WorkGridItem
              id="WriteFree"
              title="Write Free"
              src={`${githubUrl}/writefree-fe`}
            >
              World’s first web-based note-taking application specifically
              designed to support people with dyslexia.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Works
