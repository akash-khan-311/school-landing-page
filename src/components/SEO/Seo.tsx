import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>
        Global Talent School & College | Quality Education & Modern Facilities
      </title>
      <meta
        name="description"
        content="Global Talent School & College provides a safe, engaging, and modern learning environment for students. Experienced teachers, advanced classrooms, and holistic education to ensure student success."
      />
      <meta
        name="keywords"
        content="school, education, primary school, secondary school, learning, teachers, classrooms, student success, admissions"
      />
      <meta name="author" content="Global Talent School & College" />
      <meta name="robots" content="index, follow" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Global Talent School & College | Quality Education & Modern Facilities"
      />
      <meta
        property="og:description"
        content="Discover Global Talent School & College’s vibrant learning environment with experienced teachers and modern facilities that ensure student success."
      />
      <meta property="og:url" content="https://www.yourschoolwebsite.com" />
      <meta
        property="og:image"
        content="https://www.yourschoolwebsite.com/images/og-image.jpg"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Our School | Quality Education & Modern Facilities"
      />
      <meta
        name="twitter:description"
        content="Discover Global Talent School & College’s vibrant learning environment with experienced teachers and modern facilities that ensure student success."
      />
      <meta
        name="twitter:image"
        content="https://www.yourschoolwebsite.com/images/og-image.jpg"
      />
      <meta name="twitter:site" content="@YourSchoolTwitterHandle" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </Head>
  );
}
