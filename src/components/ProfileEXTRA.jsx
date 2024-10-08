function Profile() {
    return (
      <div>
        <h1>Profile Card Challenge</h1>
        <ProfileCard
          name="Alice"
          age={30}
          greeting={
            <div>
              <strong>Hi Alice, have a wonderful day!</strong>
            </div>
          }
        >
          <p>Hobbies: Reading, Hiking</p>
          <button>Contact</button>
        </ProfileCard>
  
        <ProfileCard
          name="Bob"
          age={25}
          greeting={
            <div>
              <strong>Hello Bob, keep up the great work!</strong>
            </div>
          }
        >
          <p>Hobbies: Gaming, Cooking</p>
          <button>Contact</button>
        </ProfileCard>
      </div>
    );
  }
  
  export default Profile;
  

//  ---- getting and destructuring above props (actually to be done in diff file)

function ProfileCard(props){

    return (
        <>
        <h3 > Name: {props.name} </h3>
        <h3 > Age: {props.age} </h3>

        {/* thoughts its JSX; accessing emthod is same */}
        <h3 > Greeting: {props.greeting} </h3>

        <section >

            {/* accessing text written inside  (as props.children) inside ProfileCard component */}

            {props.children}
            
        </section>
        </>
    )

}