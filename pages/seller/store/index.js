import React, { Fragment ,useState , useEffect } from 'react';
// import '../../Component/css/style.css';
// import '../Store/store.css';
// import StoreImages from '../../Component/images/storeimage.jpg';
import styles from '../../../components/componentsStyling/sellerStore.module.css';
import StoreImages from '../../../public/images/storeimage.jpg';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsToggleOff ,BsToggleOn} from 'react-icons/bs';

const Store = () => {

    const [users, setUsers] = useState([]);
    const [isToggled, setIsToggled] = useState({});
  
    const getUsers = async () => {
      const response = await fetch("https://api.github.com/users");
      const FinalData = await response.json();
      setUsers(FinalData);
    };
  
    useEffect(() => {
      getUsers();
    }, []);
  
    const handleClick = (id) => {
      setIsToggled({
        ...isToggled,
        [id]: !isToggled[id],
      });
    };
//     const navLinks = document.querySelectorAll('.nav a');

// navLinks.forEach(navLink => {
//   navLink.addEventListener('click', () => {
 
//     navLinks.forEach(navLink => {
//       navLink.classList.remove('active');
//     });

 
//     navLink.classList.add('active');
//   });
// });

  return (
    <Fragment>
       <div className='content '>
        <div className={styles[`shard-product`]}>
        <img src={StoreImages} alt="StoreImages" className={styles["image-store"]} />
        {/* <img src={users[0].avatar_url} alt="" className='image-store' /> */}
        <div className="container">
          <div className='filter-cate'>
          <ul className="nav">
            {
          users.map((curElem) => {
                 return (
                   <li key={curElem.id} value={curElem.login}><a href='#'>{curElem.login}</a></li>
                     )
                       })
                      }
              </ul>
     
          </div>
          <div className="row">
            {users.map((curElem) => {
              return (
                <div className="card_item" key={curElem.id}>
                  <div className="card_inner">
                    <img src={curElem.avatar_url} alt="" />
                    <div className="userName">{curElem.login}</div>
                    <div className="detail-box">
                      <div className="gitDetail">
                        <span>
                          <FiEdit3 style={{ width: "18px", height: "30px" }} />
                        </span>
                      </div>
                      <div className="gitDetail">
                        <span>
                          <RiDeleteBin6Line
                            style={{ width: "18px", height: "30px" }}
                          />
                        </span>
                      </div>
                      <div className="gitDetail">
                        <span onClick={() => handleClick(curElem.id)}>
                          {isToggled[curElem.id] ? (
                            <BsToggleOff
                              style={{
                                width: "18px",
                                height: "25px",
                                color: "#ff6600",
                              }}
                            />
                          ) : (
                            <BsToggleOn
                              style={{
                                width: "18px",
                                height: "25px",
                                color: "#ff6600",
                              }}
                            />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

  
  export default Store;