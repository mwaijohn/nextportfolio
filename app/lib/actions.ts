'use server'

export async function saveEmail(formData: FormData) {
    console.log("Form Data:", formData);
    const email = formData.get("email");
    const name = formData.get("name");
    const subject = formData.get("subject");
    const message = formData.get("message");

    await new Promise(resolve => setTimeout(resolve, 1500));


    return {
        success: true,
        message: 'Failed to submit form'
    };
}