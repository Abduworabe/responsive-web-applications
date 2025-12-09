import React from "react";
import Icon from "../../../components/AppIcon";

const BudgetOverview = ({ budgetData }) => {
  const calculatePercentage = (spent, total) => {
    return Math.min((spent / total) * 100, 100);
  };

  return (
    <div className="civic-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          Budget Overview
        </h3>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Calendar" size={16} />
          <span>{budgetData?.period}</span>
        </div>
      </div>
      <div className="space-y-6">
        <div className="p-4 rounded-lg bg-muted/30">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Total Budget</span>
            <span className="text-2xl font-bold text-foreground">
              $
              {budgetData?.totalBudget?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Spent</span>
            <span className="text-lg font-semibold text-error">
              $
              {budgetData?.totalSpent?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-error transition-all duration-500"
              style={{
                width: `${calculatePercentage(
                  budgetData?.totalSpent,
                  budgetData?.totalBudget
                )}%`,
              }}
            />
          </div>
        </div>

        <div className="space-y-4">
          {budgetData?.categories?.map((category) => (
            <div key={category?.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Icon
                    name={category?.icon}
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span className="text-sm font-medium text-foreground">
                    {category?.name}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-foreground">
                    $
                    {category?.spent?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    of $
                    {category?.budget?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    calculatePercentage(category?.spent, category?.budget) > 90
                      ? "bg-error"
                      : calculatePercentage(category?.spent, category?.budget) >
                        75
                      ? "bg-warning"
                      : "bg-success"
                  }`}
                  style={{
                    width: `${calculatePercentage(
                      category?.spent,
                      category?.budget
                    )}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">
              Remaining Budget
            </span>
            <span className="text-lg font-bold text-success">
              $
              {(
                budgetData?.totalBudget - budgetData?.totalSpent
              )?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetOverview;
