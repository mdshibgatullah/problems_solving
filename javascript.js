// 1-6 random number print

// method 1
// const getRandomNum = Math.floor(Math.random() * 6) + 1;
// console.log(getRandomNum)

// method 2
// function getRandomNum(){
//     return Math.floor(Math.random() * 6) + 1
// }
// console.log(getRandomNum())



// sokol name alpabetically sajanu
// const studsents = ["Jashim", 'Rahim', 'Karim', 'Ahona', 'Bilay'];
// console.log(studsents.sort())

// sokol number serially sajanu

// const numbers  = [4,5,1,9,8,4,0]
// numbers.sort((a,b)=> a-b) // b-a dile discending akare asbe
// console.log(numbers)


// leap year check
// function leap_year(year){
//     if(year % 4 === 0 || ((year % 400 === 0 && year % 100 !== 0))){
//         return 'This is leap year'
//     }else{
//         return 'This is not leap year'
//     }
// }
// console.log(leap_year(2027))

// ৪ দ্বারা বিভাজ্য হলে Leap Year,
// কিন্তু ১০০ দ্বারা বিভাজ্য হলে Leap Year নয়,
// তবে ৪০০ দ্বারা বিভাজ্য হলে আবার Leap Year।


// even or odd number
// function evenOrodd(num){
//     if(num % 2 == 0){
//         return 'Even'
//     }else{
//         return 'Odd'
//     }
// }
// console.log(evenOrodd(4680))


// power of number
// let num = 3
// console.log(num ** 2)

// let str = "JavaScript"
// console.log(str.length)



// Reverse String 

// let text = "JavaScript";
// console.log(text.split('').reverse().join(''))

// function rev(str){
//     return str.split('').reverse().join('')
// }
// console.log(rev('Hello'))


// Find biggest number
// const number = [35,35,574,456,6784,467]
// console.log(Math.max(...number))

// function maxNum(...number){
//     return Math.max(...number)
// }
// console.log(maxNum(24,56,7,4))



// array er all numbers jug kora 
// let numbers = [23,57,46,467]
// let sum = 0
// for(i=0; i < numbers.length; i++){
//     sum += numbers[i]
// }
// console.log(sum)


// find a Number negative or positive 
// const num = 10.90
// if(num > 0){
//     console.log('Positive')
// }else{
//     console.log('Negative')
// }


// Day cheker using switch 
const dayNumber = 5;
switch(dayNumber){
    case 1:
        console.log('Saturday');
        break;
    case 2:
        console.log('Sunday');
        break;
    case 3:
        console.log('Monday');
        break;
    case 4:
        console.log('Tuesday');
        break;
    case 5:
        console.log('Wednesday');
        break;
    case 6:
        console.log('Thusday');
        break;
    case 7:
        console.log('Friday');
        break;
    default: console.log("Invalid day number! Please enter a number between 1 and 7.")

} 


// print 1-100 
// for (i=0; i <= 100; i++){
//     console.log(i)
// }


// 1-100 jug 
// let sum = 0;
// for (i=0; i <= 100; i++){
//     sum += i
// }
// console.log(sum)


// multification 
let number = 7;
for(i=1; i <=10 ; i++){
    console.log(`${number} x ${i} = ${number * i}`)
}


// greating funtion 
function greate(name){
    console.log(`Hello, ${name}`)
}
greate('Sifat')

const student = {
  name: "Sifat",
  age: 22,
  department: "CSE",
  marks: 85
};
console.log(student)


// second largest number ber kori
// let numbers = [23,56,36,467,468]
// let sortNum = numbers.sort((a,b)=> b-a)
// console.log(sortNum[1])


// second smallest number ber kori
// let numbers = [23,56,36,467,468]
// let sortNum = numbers.sort((a,b)=> a-b)
// console.log(sortNum[1])


// count even and odd number 

let numbers = [24,74,46,25,96,457,46,89]
let count = {even: 0, odd: 0}
for(let num of numbers){
    num % 2 == 0 ? count.even++ : count.odd++
}
console.log(count)

// remove duplicate number
// const numb = [1, 2, 3, 2, 4, 5, 1, 6, 3];
// let duplicate = numb.filter((num, index)=> numb.indexOf(num) !==index)
// console.log(duplicate)

// print all even number 
// for(i=0; i < numb.length; i++){
//     if(numb[i] % 2 === 0){
//         console.log(numb[i])
//     }
// }

const num = [1, 2, 3, 5, 6, 8];
for(i= 0; i < num.length; i++){
    if(num[i] !== i +1){
        console.log(i +1)
        break
    }
}




import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaImage } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Layouts from './Layouts';
import { apiUrl } from './http';
import { usePosts } from '../context/PostsContext';

const AllPost = () => {
  const { posts, loading } = usePosts();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const imageBaseUrl = apiUrl.replace('/api', '');

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const displayedPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <Layouts>
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col lg={8}>
              <Card className="border rounded-4 p-4 bg-white shadow-sm">
                <h4 className="fw-bold mb-4 text-dark border-bottom pb-3">All Posts</h4>

                {loading ? (
                  <div className="text-center py-5"><Spinner animation="border" variant="primary" /></div>
                ) : displayedPosts.length === 0 ? (
                  <div className="text-center py-5 text-muted">No posts found.</div>
                ) : (
                  <div className="d-flex flex-column gap-4">
                    {displayedPosts.map((article) => {
                      const categoryName = typeof article.category === 'object' 
                        ? (article.category?.name || 'General') 
                        : (article.category || article.category_name || 'General');

                      const postDate = article.created_at || article.createdAt || article.date 
                        ? new Date(article.created_at || article.createdAt || article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })
                        : 'Recently';

                      const rawDescription = article.description || article.desc || article.content || '';
                      const cleanDescription = rawDescription.replace(/<[^>]*>?/gm, '').trim();

                      return (
                        <div key={article.id} className="pb-4 border-bottom">
                          <Row className="g-3 align-items-center">
                            <Col md={4}>
                              <Link to={`/post/${article.id}`} className="d-block overflow-hidden rounded-3">
                                {article.image ? (
                                  <img 
                                    src={`${imageBaseUrl}/${article.image}`} 
                                    alt={article.title} 
                                    className="w-100 rounded-3 object-fit-cover" 
                                    style={{ height: '150px' }} 
                                  />
                                ) : (
                                  <div 
                                    className="bg-light rounded-3 d-flex align-items-center justify-content-center text-muted border" 
                                    style={{ height: '150px' }}
                                  >
                                    <FaImage size={30} />
                                  </div>
                                )}
                              </Link>
                            </Col>

                            <Col md={8}>
                              <span
                                className="badge bg-light text-primary border fw-bold mb-2 text-capitalize"
                                style={{ fontSize: '11px', letterSpacing: '0.5px' }}
                              >
                                {categoryName}
                              </span>

                              <h5 className="fw-bold text-dark mb-2 style-title cursor-pointer">
                                <Link to={`/post/${article.id}`} className="text-decoration-none text-dark">
                                  {article.title}
                                </Link>
                              </h5>

                              <p 
                                className="text-muted small mb-2"
                                style={{
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis'
                                }}
                              >
                                {cleanDescription}
                              </p>

                              <small className="text-muted fw-medium" style={{ fontSize: '12px' }}>
                                {postDate}
                              </small>
                            </Col>
                          </Row>
                        </div>
                      );
                    })}
                  </div>
                )}

                {!loading && totalPages > 1 && (
                  <div className="mt-4 pt-2 d-flex justify-content-between align-items-center border-top">
                    <Button variant="outline-primary" onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1}>
                      <FaArrowLeft /> Previous
                    </Button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <Button variant="primary" onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages}>
                      Next <FaArrowRight />
                    </Button>
                  </div>
                )}
              </Card>
            </Col>

            <Sidebar />
          </Row>
        </Container>
      </section>
    </Layouts>
  );
};

export default AllPost;

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaImage } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Layouts from './Layouts';
import { apiUrl } from './http';
import { usePosts } from '../context/PostsContext';

const AllPost = () => {
  const { posts, loading } = usePosts();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const imageBaseUrl = apiUrl.replace('/api', '');

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const displayedPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <Layouts>
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col lg={8}>
              <Card className="border rounded-4 p-4 bg-white shadow-sm">
                <h4 className="fw-bold mb-4 text-dark border-bottom pb-3">All Posts</h4>

                {loading ? (
                  <div className="text-center py-5"><Spinner animation="border" variant="primary" /></div>
                ) : displayedPosts.length === 0 ? (
                  <div className="text-center py-5 text-muted">No posts found.</div>
                ) : (
                  <div className="d-flex flex-column gap-4">
                    {displayedPosts.map((article) => {
                      const categoryName = typeof article.category === 'object' 
                        ? (article.category?.name || 'General') 
                        : (article.category || article.category_name || 'General');

                      const postDate = article.created_at || article.createdAt || article.date 
                        ? new Date(article.created_at || article.createdAt || article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })
                        : 'Recently';

                      const rawDescription = article.description || article.desc || article.content || '';
                      const cleanDescription = rawDescription.replace(/<[^>]*>?/gm, '').trim();

                      return (
                        <div key={article.id} className="pb-4 border-bottom">
                          <Row className="g-3 align-items-center">
                            <Col md={4}>
                              <Link to={`/post/${article.id}`} className="d-block overflow-hidden rounded-3">
                                {article.image ? (
                                  <img 
                                    src={`${imageBaseUrl}/${article.image}`} 
                                    alt={article.title} 
                                    className="w-100 rounded-3 object-fit-cover" 
                                    style={{ height: '150px' }} 
                                  />
                                ) : (
                                  <div 
                                    className="bg-light rounded-3 d-flex align-items-center justify-content-center text-muted border" 
                                    style={{ height: '150px' }}
                                  >
                                    <FaImage size={30} />
                                  </div>
                                )}
                              </Link>
                            </Col>

                            <Col md={8}>
                              <span
                                className="badge bg-light text-primary border fw-bold mb-2 text-capitalize"
                                style={{ fontSize: '11px', letterSpacing: '0.5px' }}
                              >
                                {categoryName}
                              </span>

                              <h5 className="fw-bold text-dark mb-2 style-title cursor-pointer">
                                <Link to={`/post/${article.id}`} className="text-decoration-none text-dark">
                                  {article.title}
                                </Link>
                              </h5>

                              <p 
                                className="text-muted small mb-2"
                                style={{
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis'
                                }}
                              >
                                {cleanDescription}
                              </p>

                              <small className="text-muted fw-medium" style={{ fontSize: '12px' }}>
                                {postDate}
                              </small>
                            </Col>
                          </Row>
                        </div>
                      );
                    })}
                  </div>
                )}

                {!loading && totalPages > 1 && (
                  <div className="mt-4 pt-2 d-flex justify-content-between align-items-center border-top">
                    <Button variant="outline-primary" onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1}>
                      <FaArrowLeft /> Previous
                    </Button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <Button variant="primary" onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages}>
                      Next <FaArrowRight />
                    </Button>
                  </div>
                )}
              </Card>
            </Col>

            <Sidebar />
          </Row>
        </Container>
      </section>
    </Layouts>
  );
};

export default AllPost;
