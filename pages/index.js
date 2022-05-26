import Link from 'next/link';
import { Space, Typography, Button, Toast } from '@douyinfe/semi-ui';
import AppRoute from '@com/appcom/route';
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div style={{ padding: 20 }}>

      <Space vertical spacing={50} align="start">
        <Space vertical spacing={30} align="start">
          <Title>
            Practice to improve your language skills
          </Title>
          <Paragraph type="secondary">
            Start your daily challenge, climb a leaderboard, 
            participate on different exams across the country.
          </Paragraph>
          <Button>
            Start your daily challenge...
          </Button>
        </Space>
        <Space vertical spacing={10} align="start">
          <Title heading={5}>
            What Is HSK?
          </Title>
          <Paragraph type="secondary">
            HSK (汉语水平考试 / Hànyǔ shuǐpíng kǎoshì) is the People's Republic of China's standardised Chinese proficiency test. For general information about the test, see Hanyu Shuiping Kaoshi (on Wikipedia) and Hanban's website.
            HSK was revised in 2010. See the Comparison of New and Old HSK Test for a basic overview of similarity and differences.

          </Paragraph>
          <Paragraph type="secondary">
            Some test centres offer computer-based tests for HSK levels 4, 5 and 6. If you decide to take a compter-based HSK test, make sure you find out in advance what input method will be used on the computer (so you can familiarise yourself with it in advnace) and, if you are not used to read Chinese texts in a variety of font faces, which font face will be used to display text. See the question What's the format of official “online” HSK tests? on Chinese Language Stack Exchange.
          </Paragraph>
          <Link href="/hsk">
            <Button>
              Learn more about HSK
            </Button>
          </Link>
        </Space>
      </Space>
    </div>
  )
}
export const getServerSideProps = AppRoute(() => {
  console.log("loading home...");
}, { secured: false });
