/*
note from shm: 
no, this footer did not need to be its own whole component.
but i was trying to check how components work before transitioning
Isabel's work into a Post component. 
*/


const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{<p class="text-end text-muted">
  &copy; Visual Trend Study Tool Created by researchers at the Berkeley
  Institute of Design Ace Chen, Isabel Li, Pradeep Saravana Rathnam, and Timothy
  Yang, and led by Shm Garanganao Almeda, Fall {year}
  </p>}</footer>;
};

export default Footer;