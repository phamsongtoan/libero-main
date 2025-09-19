import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import PostItem from './PostItem'
import { Pagination } from 'react-bootstrap'

const BlogContent = ({ isDetail }) => {
  return (
    <div className={cn(styles.blogContent)}>
      <div className='blog-main'>
        {isDetail
          ? <div className='content-detail'>
            <PostItem isDetailPage/>
            <div className='mt-4'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p> <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p> <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p> <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p> <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p> <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p> <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p> <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p> <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus explicabo qui quod sapiente ipsam! Dignissimos ipsa atque facilis! Iusto illo molestiae facilis odit amet unde porro sint odio non eaque?
            </p>
            </div>
        </div>
          : <ul>
        <li>
          <PostItem/>
          </li>
          <li className='mt-5'>
          <PostItem/>
          </li>
        </ul>
        }
      </div>
      <Pagination/>
    </div>
  )
}

export default BlogContent
