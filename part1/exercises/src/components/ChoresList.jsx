import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
         <h3 className={classes.choresHeading}>Chores List</h3>
          <ul className={classes.choresText}>
            <li>Change out burnt out twinkle lights</li>
            <li>Clean behind oven</li>
            <li>Fix cat tree</li>
          </ul>
      </div>
   );
}