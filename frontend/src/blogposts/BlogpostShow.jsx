import Game from '../assets/ar6dy.png'
import Book from '../assets/true.jpg'
import './BlogpostShow.css'

const BlogpostShow = ({ title, content }) => {
  return (
    <article>
      <img className='blogpost-img' src={Game} />
      <h1 className='blogpost-h1'>Death Stranding Surprised Me</h1>
      <h2 className='blogpost-h2'>and I know it shouldn't</h2>
      <time className='blogpost-time' dateTime='2021-10-02'>
        2021-10-02
      </time>
      <hr className='blogpost-hr' />
      <p className='blogpost-p'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Iaculis at erat
        pellentesque adipiscing. Senectus et netus et malesuada fames ac turpis.
        Ut placerat orci nulla pellentesque dignissim enim. Felis eget velit
        aliquet sagittis id consectetur purus. Integer eget aliquet nibh
        praesent tristique magna sit. Et egestas quis ipsum suspendisse ultrices
        gravida dictum fusce ut. Nulla aliquet porttitor lacus luctus accumsan
        tortor posuere. Viverra nam libero justo laoreet. Risus pretium quam
        vulputate dignissim suspendisse in est ante in. Et ultrices neque ornare
        aenean euismod. Neque gravida in fermentum et sollicitudin ac orci.
        Gravida arcu ac tortor dignissim convallis aenean. Pharetra et ultrices
        neque ornare aenean euismod elementum nisi quis. Consectetur lorem donec
        massa sapien faucibus et molestie. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Iaculis at erat pellentesque adipiscing.
        Senectus et netus et malesuada fames ac turpis. Ut placerat orci nulla
        pellentesque dignissim enim. Felis eget velit aliquet sagittis id
        consectetur purus. Integer eget aliquet nibh praesent tristique magna
        sit. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.
        Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Viverra
        nam libero justo laoreet. Risus pretium quam vulputate dignissim
        suspendisse in est ante in. Et ultrices neque ornare aenean euismod.
        Neque gravida in fermentum et sollicitudin ac orci. Gravida arcu ac
        tortor dignissim convallis aenean. Pharetra et ultrices neque ornare
        aenean euismod elementum nisi quis. Consectetur lorem donec massa sapien
        faucibus et molestie.
      </p>
    </article>
  )
}

export default BlogpostShow
