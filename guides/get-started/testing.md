---
title: Testing
order: 4
---

# Testing deployments

as labs can go kaput we ship a test suite to check the integrity of your labs. In case you might end up with hundreds of labs, it's easy to find which just won't meet the expectations of your users

## Running the Test Suite

To ensure the integrity of your labs, we provide a comprehensive test suite. Follow these steps to run the tests:

1. **Navigate to the Project Directory**

   Change to the project directory if you haven't already:

   ```sh
   cd newpush-labs
   ```

2. **Run the Test Suite**

   Execute the test suite using the following command:

   ```sh
   make test
   ```

   :::tip
   You can override the default inventory file by passing  `HOST_FILE` argument.
   :::
   
3. **Review Test Results**

   Once the tests are complete, review the output in the terminal to identify any issues or failures. The test suite will provide detailed information on which labs did not meet the expected criteria.

By regularly running the test suite, you can quickly identify and address any problems, ensuring that your labs consistently meet the expectations of your users.
