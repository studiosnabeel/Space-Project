import { React } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleMissionReserved } from '../../Redux/missionSlice';

const Missions = ({ mission }) => {
  const dispatch = useDispatch();

  const handleJoiningMissions = (id) => {
    dispatch(toggleMissionReserved(id));
  };

  const handleLeavingMissions = (id) => {
    dispatch(toggleMissionReserved(id));
  };

  return (
    <>
      <tr className="bg-gray-100 border-b even:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mission.title}</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
          {mission.desc}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {mission.reserved ? (
            <p className="bg-[#18a2b8] text-white rounded w-fit px-1">Active member</p>
          ) : (
            <p className="bg-neutral-700 text-white rounded w-fit px-1">Not a member</p>
          )}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {mission.reserved ? (
            <button
              className="border-solid rounded border-2 text-[red] border-[red] px-4 py-1"
              type="button"
              onClick={() => {
                handleLeavingMissions(mission.id);
              }}
            >
              Leave Mission
            </button>
          ) : (
            <button
              className="border-solid rounded border-2 border-[#4b5056] px-4 py-1"
              type="button"
              onClick={() => {
                handleJoiningMissions(mission.id);
              }}
            >
              Join Mission
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

Missions.defaultProps = { mission: null };
Missions.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};

export default Missions;
