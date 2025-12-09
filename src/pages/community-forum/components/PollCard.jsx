import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const PollCard = ({ poll }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(poll?.hasVoted || false);

  const handleVote = () => {
    if (selectedOption !== null) {
      setHasVoted(true);
    }
  };

  const getTimeRemaining = (endDate) => {
    const now = new Date("2025-12-09T16:33:06");
    const end = new Date(endDate);
    const diff = end - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (days > 0) return `${days} days remaining`;
    if (hours > 0) return `${hours} hours remaining`;
    return "Ending soon";
  };

  return (
    <div className="civic-card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="BarChart3" size={20} className="text-primary" />
          <span className="text-sm font-medium text-primary">
            Community Poll
          </span>
        </div>
        <span className="text-xs text-muted-foreground">
          {getTimeRemaining(poll?.endDate)}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {poll?.question}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{poll?.description}</p>
      <div className="space-y-3 mb-4">
        {poll?.options?.map((option, index) => {
          const percentage = hasVoted ? option?.percentage : 0;
          const isSelected = selectedOption === index;

          return (
            <button
              key={index}
              onClick={() => !hasVoted && setSelectedOption(index)}
              disabled={hasVoted}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-civic-fast ${
                isSelected && !hasVoted
                  ? "border-primary bg-primary/5"
                  : hasVoted
                  ? "border-border cursor-default"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">
                  {option?.text}
                </span>
                {hasVoted && (
                  <span className="text-sm font-semibold text-primary">
                    {percentage}%
                  </span>
                )}
              </div>
              {hasVoted && (
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-full transition-all duration-500 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span className="flex items-center space-x-1">
            <Icon name="Users" size={16} />
            <span>{poll?.totalVotes} votes</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="MessageSquare" size={16} />
            <span>{poll?.comments} comments</span>
          </span>
        </div>
        {!hasVoted && (
          <Button
            variant="default"
            size="sm"
            disabled={selectedOption === null}
            onClick={handleVote}
          >
            Submit Vote
          </Button>
        )}
      </div>
    </div>
  );
};

export default PollCard;
