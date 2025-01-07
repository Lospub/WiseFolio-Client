# WiseFolio

## Overview

WiseFolio is a next-generation AI personal financial management platform combined with an optional personalized product recommendation system. The application allows users to:

1. **Track Expenses:** AI analyzes spending habits, offers budgeting suggestions, and forecasts future expenses.
2. **AI-Driven Recommendations:** Receive tailored product or service suggestions based on financial habits.



## Problem Space

Many individuals struggle with:

1. **Understanding Spending Habits:** This leads to poor budgeting and financial stress. Traditional financial tools often present data without actionable insights, leaving users overwhelmed.

2. **Decision Fatigue from Shopping Options:** The vast number of shopping deals and stores creates decision fatigue. Manually searching for deals is time-consuming, and most applications lack personalization for financial preferences.



## Why WiseFolio?

1. **Bridging Financial Management and Shopping Insights:**
   - Combines expense tracking with shopping recommendations to help users save money and shop smarter. Offers a comprehensive view of financial and consumer habits in one app.

2. **Personalization:**
   - Tailors suggestions to individual financial situations and preferences, reducing decision fatigue and making financial management more relevant.



## User Profile

Target users include individuals who aim to stretch their budgets and maximize value:
- **Students and Early Career Individuals**
- **Young Professionals (Ages 25-35)**
- **Budget-Conscious Families (Ages 30-50)**
- **Frequent Shoppers and Bargain Hunters**



## Features

### User Modes
1. **Guest User:**
   - Access the app without creating an account.
2. **Registered User:**
   - Create an account for enhanced functionality.

### Financial Features
1. **Expense Tracking:**
   - Log transactions manually or via bank statements.
   - Automatic categorization (e.g., groceries, dining).
   - View detailed breakdowns and analytics.

2. **Budget Management:**
   - Create and track budgets for specific categories.
   - Real-time tracking with visual indicators.
   - Alerts for overspending.

3. **Savings Goals:**
   - Set and track financial goals (e.g., vacations).
   - Visual indicators showing progress.
   - AI suggestions to optimize spending and accelerate savings.

4. **Financial Insights and Analytics:**
   - AI-driven insights on spending patterns.
   - Monthly and weekly summaries with visual charts.
   - Predictive analysis for future expenses.

### Security and Privacy
1. **Data Security:**
   - Local data storage for guest users.
   - Encrypted cloud backup for registered users.
2. **Data Recovery:**
   - Cloud synchronization ensures data safety for registered users.
   - Inform guest users about potential data loss upon app deletion.

### Usability Features
1. **Search and Filter:**
   - Search transactions, stores, or deals by keywords.
   - Advanced filters by category, price range, or location.



## Implementation

### Frontend
- **Framework:** React (TypeScript)
- **Styling:** SASS/SCSS
- **Routing:** React Router
- **State Management:** Redux Toolkit
- **Visualization:** Recharts for analytics

### Backend
- **Runtime:** Node.js
- **Framework:** NestJS
- **Database:** Knex.js with MySQL
- **Data Storage:** Google Cloud Storage
- **AI/ML Integration:** Python with FastAPI

### DevOps & Hosting
- **Frontend Hosting:** Vercel
- **Database:** PlanetScale (serverless MySQL)
- **Containerization:** Docker
- **CI/CD:** GitHub Actions

### Tools
- **Authentication:** Firebase
- **Notifications:** Firebase Email Services
- **Analytics:** Google Analytics


## APIs

### AI/ML APIs
- **OpenAI GPT API:**
  - **Purpose:** Provide personalized financial insights, explain trends, and offer budgeting advice.
  - **Documentation:** [OpenAI GPT API](https://openai.com/api/)


## Sitemap

1. **Home Page:** Introduction to the app with an overview and call-to-action buttons.
2. **Login Page:** Secure login for registered users.
3. **Registration Page:** Sign-up for new users.
4. **Dashboard:** Central hub for financial data and insights.
5. **Expense Tracking Page:** Log and categorize expenses.
6. **Budget Management Page:** Create and monitor budgets.
7. **Savings Goals Page:** Set and track progress towards goals.
8. **Profile Settings Page:** Manage account details and preferences.

## Mockups

1. Home Page
Purpose: Serve as the app's entry point with an overview and call-to-action buttons.
Key Elements:
Brief description of features.
Buttons for “Sign Up,” “Login,” or “Continue as Guest.”
2. Login Page
Purpose: Allow registered users to log in.
Key Elements:
Email/username and password fields.
“Forgot Password” option.
3. Registration Page
Purpose: Enable new users to create accounts.
Key Elements:
Simple form for user details (name, email, password).
Option to skip registration and continue as a guest.
4. Dashboard
Purpose: Central hub for users to view financial data and access features.
Key Elements:
Overview of recent transactions and budget status.
Links to expense tracking, budgeting, and savings goals.
5. Expense Tracking Page
Purpose: Enable users to log and view expenses.
Key Elements:
Manual transaction entry form.
Categorized list of logged expenses.
6. Budget Management Page
Purpose: Help users create and monitor budgets.
Key Elements:
Simple budget setup for key categories.
Visual progress tracker for spending against budgets.
7. Savings Goals Page
Purpose: Allow users to set basic financial goals.
Key Elements:
Goal setup interface (goal name, amount, deadline).
Progress bar for each goal.
8. Profile Settings Page
Purpose: Manage account details and preferences.
Key Elements:
Edit account information.
Switch between guest and registered modes.

## Data

- **User:** Profile data, login credentials
- **Expense:** Amount, category, date
- **Budget:** Category, limit, usage
- **Savings Goal:** Name, amount, deadline 

## Endpoints

1. **User Authentication:**
   - POST /register
   - POST /login
2. **Expense Tracking:**
   - GET /expenses
   - POST /expenses
3. **Budget Management:**
   - GET /budgets
   - POST /budgets
4. **Savings Goals:**
   - GET /goals
   - POST /goals

## Roadmap

### Epic 1: User Authentication and Profile Management

#### US.1.0.1 (Must Have)
**As a guest user, I want to access the app without creating an account so that I can explore its features.**
- **Risk Level:** Low
- **Story Points:** 3
- **Acceptance Criteria:**
  1. Guest users can use the app without registration.
  2. Local data storage is used for guest accounts.
  3. A prompt is displayed to encourage guest users to register.

#### US.1.0.2 (Must Have)
**As a user, I want to create an account with my email and password so that I can save my data securely.**
- **Risk Level:** Medium
- **Story Points:** 5
- **Acceptance Criteria:**
  1. The registration form requires valid email and password fields.
  2. A confirmation email is sent after successful registration.
  3. The system prevents duplicate accounts with the same email.

#### US.1.0.3 (Must Have)
**As a registered user, I want to log in to my account so that I can access my saved financial data.**
- **Risk Level:** Low
- **Story Points:** 3
- **Acceptance Criteria:**
  1. Users can log in using their email and password.
  2. Authentication fails for incorrect credentials.
  3. The user is redirected to the dashboard upon successful login.

#### US.1.0.4 (Should Have)
**As a user, I want to reset my password if I forget it so that I can regain access to my account.**
- **Risk Level:** Medium
- **Story Points:** 5
- **Acceptance Criteria:**
  1. Users can request a password reset via email.
  2. A secure reset link is sent to the registered email.
  3. Password reset updates the user’s credentials in the system.

---

### Epic 2: Expense Tracking

#### US.2.0.1 (Must Have)
**As a user, I want to manually log expenses so that I can track my spending.**
- **Risk Level:** Low
- **Story Points:** 5
- **Acceptance Criteria:**
  1. Users can input an expense with a description, amount, and category.
  2. Expenses are saved and displayed in a chronological list.
  3. Data persists after app restart (for registered users).

#### US.2.0.2 (Should Have)
**As a user, I want to categorize my expenses (e.g., groceries, bills) so that I can better understand my spending patterns.**
- **Risk Level:** Medium
- **Story Points:** 5
- **Acceptance Criteria:**
  1. Users can assign a predefined category to each expense.
  2. Categories are visually distinguishable in the list.
  3. Users can filter expenses by category.

#### US.2.0.3 (Must Have)
**As a user, I want to view a list of all logged expenses so that I can monitor my spending history.**
- **Risk Level:** Low
- **Story Points:** 3
- **Acceptance Criteria:**
  1. Expenses are displayed in chronological order.
  2. Each entry includes the amount, category, and date.
  3. Users can scroll through or search their expenses.

---

### Epic 3: Budget Management

#### US.3.0.1 (Must Have)
**As a user, I want to create a budget for specific categories so that I can control my spending.**
- **Risk Level:** Medium
- **Story Points:** 5
- **Acceptance Criteria:**
  1. Users can set budgets for predefined categories.
  2. A budget consists of a category, amount, and time frame.
  3. Users are notified when a budget is created successfully.

#### US.3.0.2 (Should Have)
**As a user, I want to see how much of my budget has been used so that I can adjust my spending accordingly.**
- **Risk Level:** Medium
- **Story Points:** 5
- **Acceptance Criteria:**
  1. Budget usage is displayed as a percentage.
  2. Visual indicators (e.g., progress bars) are used for clarity.
  3. Users can view detailed spending within each budget.

#### US.3.0.3 (Could Have)
**As a user, I want to receive alerts when I am nearing my budget limit so that I can avoid overspending.**
- **Risk Level:** High
- **Story Points:** 8
- **Acceptance Criteria:**
  1. Alerts are triggered when 80% of a budget is used.
  2. Notifications are displayed in the app.
  3. Users can customize alert thresholds.

---

### Epic 4: Savings Goals

#### US.4.0.1 (Should Have)
**As a user, I want to set financial goals (e.g., saving for a vacation) so that I can track my progress.**
- **Risk Level:** Medium
- **Story Points:** 5
- **Acceptance Criteria:**
  1. Users can define a goal name, amount, and deadline.
  2. Goals are displayed with a progress bar.
  3. Users are notified when a goal is achieved.

#### US.4.0.2 (Could Have)
**As a user, I want to view a progress bar for each goal so that I can stay motivated.**
- **Risk Level:** Low
- **Story Points:** 3
- **Acceptance Criteria:**
  1. Progress bars visually update based on contributions.
  2. Goals nearing completion are highlighted.
  3. Users can view completed goals in a separate section.

---

### Epic 5: Dashboard

#### US.5.0.1 (Must Have)
**As a user, I want to view a summary of my financial data (expenses, budgets, goals) so that I can get an overview at a glance.**
- **Risk Level:** Medium
- **Story Points:** 5
- **Acceptance Criteria:**
  1. The dashboard displays total expenses, budgets, and goals in a concise format.
  2. Users can quickly navigate to detailed views from the dashboard.
  3. Data updates in real-time when changes are made.

#### US.5.0.2 (Should Have)
**As a user, I want quick links to expense tracking, budgeting, and savings so that I can navigate efficiently.**
- **Risk Level:** Low
- **Story Points:** 3
- **Acceptance Criteria:**
  1. The dashboard includes shortcuts to key features.
  2. Each link is clearly labeled and easily accessible.
  3. Navigation works seamlessly on mobile and desktop.

---

### Epic 6: Help & Support

#### US.6.0.1 (Would Have)
**As a user, I want to access a FAQ section so that I can find answers to common questions.**
- **Risk Level:** Low
- **Story Points:** 2
- **Acceptance Criteria:**
  1. FAQs are categorized for ease of use.
  2. Users can search within the FAQ section.
  3. The system displays relevant articles based on queries.

#### US.6.0.2 (Would Have)
**As a user, I want to contact support for unresolved issues so that I can get help when needed.**
- **Risk Level:** Medium
- **Story Points:** 5
- **Acceptance Criteria:**
  1. A contact form collects user issues.
  2. Support requests are acknowledged via email.
  3. Users receive a response within a specified time frame.

---

## MoSCoW Prioritization Table

| **Priority** | **User Stories**                                                                                      |
|--------------|-------------------------------------------------------------------------------------------------------|
| **Must Have**   | US.1.0.1, US.1.0.2, US.1.0.3, US.2.0.1, US.2.0.3, US.3.0.1, US.5.0.1                               |
| **Should Have** | US.1.0.4, US.2.0.2, US.3.0.2, US.4.0.1, US.5.0.2                                                   |
| **Could Have**  | US.3.0.3, US.4.0.2                                                                                 |
| **Would Have**  | US.6.0.1, US.6.0.2                                                                                 |
|

## Future Implementations
1. View local stores or deals on a map to make informed purchasing decisions. 
2. Track personal packages. 
3. A personalized product recommendation system
