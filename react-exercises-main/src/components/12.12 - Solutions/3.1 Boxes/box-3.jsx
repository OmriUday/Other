import box4 from "./box4";

const box3 = () => {
  return (
  <div style={{ width: '90vw',
  height: '80vh',
  backgroundColor: 'orange',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'column'
  }}>
    <box4 />
    <box4 />
  </div>
  );
}

export default box3;