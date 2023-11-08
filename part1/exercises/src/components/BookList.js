export default function BookList() {
   let pageTitle = "Read More Books!";
   let book1 = "https://m.media-amazon.com/images/I/91TpAAdiBLL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://www.pluggedin.com/wp-content/uploads/2020/01/hatchet-cover-687x1024.jpg";
   let book3 = "https://m.media-amazon.com/images/I/810Yf5tQ3pL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} height="200" alt="The Hitchiker's Guide to the Galaxy" />
         <img src={book2} height="200" alt="Hatchet" />
         <img src={book3} height="200" alt="The Cat in the Hat" />
      </div>      
   );
}