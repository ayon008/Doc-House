import useFetch from './Hooks/useFetch';
import DoctorCard from './DoctorCard';

const Doctors = () => {
    const { data: doctors } = useFetch('http://localhost:5000/doctorsProfiles');
    console.log(doctors);
    return (
        <div className='lg:px-40 px-10 mb-20 w-fit mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6'>
            {
                doctors?.map(d => <DoctorCard key={d?._id} data={d}></DoctorCard>)
            }
        </div>
    );
};

export default Doctors;