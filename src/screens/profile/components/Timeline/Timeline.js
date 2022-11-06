import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { PostCard } from '../../../../components';

const useStyles = makeStyles(theme => ({
  root: {},
  posts: {
    marginTop: theme.spacing(2)
  },
  post: {
    marginBottom: theme.spacing(2)
  }
}));

const initialdata = [
  {
    id: 0,
    author: {
      avatar: "https://picsum.photos/200/300?random=3",
      name: "Admin User",
    },
    message: "Access the all data points and record",
    created_at: new Date(),
    media: "https://picsum.photos/600/300?random=2",
    comments: [
      {
        author: {
          avatar: "A",
          name: "Admin"
        },
        created_at: new Date(),
        time: new Date(),
        message: "Good news for all"
      }
    ]
  }
]

const Timeline = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [posts, setPosts] = useState(initialdata);

  useEffect(() => {
    let mounted = true;

    const fetchPosts = () => {
      // axios.get('/api/users/1/posts').then(response => {
      //   if (mounted) {
      //     setPosts(response.data.posts);
      //   }
      // });
    };

    fetchPosts();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {/* <AddPost /> */}
      <div className={classes.posts}>
        {posts.map(post => (
          <PostCard
            className={classes.post}
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

Timeline.propTypes = {
  className: PropTypes.string
};

export default Timeline;
