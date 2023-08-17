/* eslint-disable array-callback-return */
import './elections.scss';
import Table from './resultTable';
import { elections } from '../../utils/data';

const Elections = () => {
  let total = 0;

  elections.map((item) => {
    item.candidates.map((el) => {
      total += el.votes.length;
    });
  });

  return (
    <section className="elections">
      <div className="electionContainer">
        {elections.map((election) => (
          <div className="electionCard" key={election.title}>
            <h2 className="title">{election.title}</h2>

            {election.votes.length === 0 ? (
              <div className="noVotesCard">
                <h3 className="totalVotes">
                  Total votes:
                  {' '}
                  {election.votes.length}
                </h3>
                <h3>
                  Candidates:
                  {' '}
                  {election.candidates.length}
                </h3>
              </div>
            ) : (
              <>
                <h4 className="totalVotes">
                  Total votes:
                  {' '}
                  {total}
                </h4>

                <Table election={election} />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Elections;
