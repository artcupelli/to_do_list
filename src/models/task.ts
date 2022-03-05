export default interface Task {
    id: number,
    title: string,
    date: Date,
    done: boolean,
    priority: "low" | "normal" | "high"
}