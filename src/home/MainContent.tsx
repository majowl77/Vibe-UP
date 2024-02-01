import { BookmarkIcon } from '@radix-ui/react-icons';
import { Box, Container, Flex } from '@radix-ui/themes';

export default function MainContent() {

  type Post = {
    imageUrl: string;
    details: string;
  }
  const posts: Post[] = [
    { imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', details: 'Post 1' },
    { imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', details: 'Post 2' },
  ];

  return (
    <Container>
      {posts.map((post, index) => (
        <Flex
          key={index}
          gap="3"
          style={{
            backgroundColor: '#0e0e0e',
            borderRadius: '10px',
            padding: '15px',
            marginBottom: '15px',
          }}
        >
          <Box style={{ borderRadius: '10px' }}>
            <img
              src={post.imageUrl}
              alt="Post Image"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </Box>
          <Flex gap="2" align="center">
            <Box>{post.details}</Box>
            <Box style={{ marginLeft: 'auto' }}>
              <BookmarkIcon />
            </Box>
          </Flex>
        </Flex>
      ))}
    </Container>
  );
}
``
