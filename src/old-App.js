{/* Header Section */}
<Layout bg={`url(${data.fields.bannerImage.fields.file.url})`}>
<div>
  <FlexCenter>
    <ProfileImage src={data.fields.profileImage.fields.file.url} alt={data.fields.profileImage.fields.title} />
  </FlexCenter>

  <headings.HeaderOne>{data.fields.websiteTitle}</headings.HeaderOne>
  
  <headings.HeaderTwo larger>{data.fields.websiteSubtitle}</headings.HeaderTwo>
  
  <headings.HeaderThree>
    <RichText content={data.fields.teaserText} />
  </headings.HeaderThree>
  
  <FlexCenter>
    <a target="_blank" rel="noopener noreferrer" href={`mailto:${data.fields.email}`}><MainBtn>Get in touch</MainBtn></a>
  </FlexCenter>
  
  <FlexCenter>
    <headings.InfoLinks>
      <a target="_blank" rel="noopener noreferrer" href={data.fields.gitHub}>GitHub</a> | <a target="_blank" rel="noopener noreferrer" href={data.fields.linkedIn}>LinkedIn</a> | <a target="_blank" rel="noopener noreferrer" href={data.fields.medium}>Medium</a>
    </headings.InfoLinks>
  </FlexCenter>
</div>
</Layout>

{/* HomePage content */}
<Layout bg="#fff">
<HomePageSections />
</Layout>

{/* Footer */}
<Layout bg="#293241">
<footer>
<FlexCenter>
    <a target="_blank" rel="noopener noreferrer" href={`mailto:${data.fields.email}`}><MainBtn>Get in touch</MainBtn></a>
  </FlexCenter>
  <FlexCenter>
    <headings.InfoLinks>
      <a target="_blank" rel="noopener noreferrer" href={data.fields.gitHub}>GitHub</a> | <a target="_blank" rel="noopener noreferrer" href={data.fields.linkedIn}>LinkedIn</a> | <a target="_blank" rel="noopener noreferrer" href={data.fields.medium}>Medium</a>
    </headings.InfoLinks>
  </FlexCenter>
</footer>
</Layout>

</div>