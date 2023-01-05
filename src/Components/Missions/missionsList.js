import React from 'react';
import { PropTypes } from 'prop-types';
import Missions from './Missions';

const MissionsList = ({ missions }) => (
  <div className="flex flex-col px-12">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full border border-slate-200">
            <thead className="bg-white border-b">
              <tr>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Missions
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Description
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {missions && missions.map((mission) => (
                <Missions mission={mission} key={mission.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

MissionsList.defaultProps = { missions: null };
MissionsList.propTypes = { missions: PropTypes.string };

export default MissionsList;
