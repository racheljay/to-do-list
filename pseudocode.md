### To Do List

## Reqirements:
        + 1. Dynamically Render the content with React using components
        + 2. Use Local Storage to store all to-do list data in the browser
        + 3. Display all to-do list items
        + 4. Three "views" for the user: All, Completed, & To-Do (not completed)
        + 5. Display prompting text to add item
        + 6. Cross out or check off one item as "completed"
        + 7. See number of remaining items
        + 8. Remove one item (soft delete / archive)
        + 9. Check off or cross out all items in one click as a "completed all" funciton
        + 10. Remove all completed items (soft delete / archive)
        + 11. Ability to press a button and all checked off items become active again

## componenets
- header
    -display title
- input
    - takes a todo
    - adds todo to a storage var
    - displays todo in list
    - saves todo in local storage

 # list
    - all
        - display all todos
        - if active, can click to make inactive (change style)
        - in inactive, can click to make active
    - active
        - display active todos
            - active is the default state
        - status btn: click to change state to inactive
            - will then move to the completed list
    - completed
        - display completed todos
            - todos that have had their state changed to inactive
        - status btn: click to change the state back to active
            - will send todo back to active list

    - delete btn: will permanently delete todo
        - available on all list items
    - onClick(toggle state)
        - will switch between active and inactive
        - will always show in all, but switch between active and completed displays

# nav
    - display count of total todos
    - tabs
        - all
            - shows all todos that have not been deleted
        - active
            - shows all todos with an active state
                - filter todos
                - if active: move to a new active array
                - render this array todo when active is clicked
        - completed
            - shows all todos with an inactive state
                -filter todos
                - if completed: move to new completed array
                - render this new array when completed is clicked