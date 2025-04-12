import styles from './ProfileCard.module.css';

function ProfileCard({ image, name, description }) {
  return (
    <div className={styles.profileCard}>
      <img src={image} alt="Profile" className={styles.profilePhoto} />
      <h3 className={styles.profileName}>{name}</h3>
      <p className={styles.profileDescription}>{description}</p>
    </div>
  );
}

export default ProfileCard;