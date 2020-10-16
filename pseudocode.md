### To Do List

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
        - completed
            - shows all todos with an inactive state
