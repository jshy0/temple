"use client";

import React, { useState } from "react";

interface JournalEntry {
  id: number;
  title: string;
  text: string;
  date: string;
}

const Journal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newEntry, setNewEntry] = useState<string>("");

  const handleAddEntry = () => {
    if (newEntry.trim() === "") return;

    const newJournalEntry: JournalEntry = {
      id: Date.now(),
      title: newTitle,
      text: newEntry,
      date: new Date().toISOString().split("T")[0],
    };

    setEntries([...entries, newJournalEntry]);
    setNewEntry("");
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Journal</h2>

      <div>
        <input
          className="border mb-2 px-2"
          type="text"
          placeholder="Entry title..."
          onChange={(e) => setNewTitle(e.target.value)}
        ></input>

        <textarea
          className="w-full border rounded-lg p-2 max-h-[150px]"
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="What's on your mind?"
          value={newEntry}
        ></textarea>

        <div className="flex justify-end">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-md"
            onClick={handleAddEntry}
          >
            Add Entry
          </button>
        </div>
      </div>

      <ul className="space-y-4">
        {entries.map((entry) => (
          <li key={entry.id}>
            <h2>
              <strong>{entry.title}</strong> - {entry.date}
            </h2>
            <p>{entry.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;
